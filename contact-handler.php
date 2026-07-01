<?php
// Simple contact form handler for Linda's Gold
// Sends emails to jewelry@goldwantedfishhoek.co.za

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = sanitize_input($_POST['name'] ?? '');
    $email = sanitize_input($_POST['email'] ?? '');
    $phone = sanitize_input($_POST['phone'] ?? '');
    $message = sanitize_input($_POST['message'] ?? '');
    
    // Validation
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(['error' => 'Please fill in all required fields']);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email address']);
        exit;
    }
    
    // Email to Linda
    $to = 'jewelry@goldwantedfishhoek.co.za';
    $subject = "New Inquiry from $name - Linda's Gold";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";
    
    if (mail($to, $subject, $body, $headers)) {
        // Confirmation email to customer
        $confirm_subject = "We received your inquiry - Linda's Gold";
        $confirm_body = "Hi $name,\n\nThank you for reaching out to Linda's Gold. We've received your inquiry and will get back to you within 24 hours.\n\nBest regards,\nLinda's Gold Team\nFish Hoek, Cape Town";
        $confirm_headers = "From: jewelry@goldwantedfishhoek.co.za\r\nContent-Type: text/plain; charset=UTF-8";
        
        mail($email, $confirm_subject, $confirm_body, $confirm_headers);
        
        http_response_code(200);
        echo json_encode(['success' => 'Thank you! We\'ll be in touch shortly.']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send message. Please try again.']);
    }
    exit;
}

function sanitize_input($input) {
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
?>
