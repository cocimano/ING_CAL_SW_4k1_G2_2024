package utn.frc.isi.is.g2.istp6back.Email.Services;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class EmailService {

    JavaMailSender javaMailSender;

    @Async
    public void sendEmailWithTemplate(String to, String subject, String templateFileName) {
        CompletableFuture.supplyAsync(() -> {
            try {
                String template = loadHtmlTemplate(templateFileName);
                sendHtmlEmail(to, subject, template);
                return null;
            } catch (IOException | MessagingException e) {
                throw new RuntimeException(e);
            }
        });
    }

    public void sendHtmlEmail(String to, String subject, String body) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(body, true);

        javaMailSender.send(message);
    }

    public String loadHtmlTemplate(String fileName) throws IOException {
        // Construye la ruta del recurso
        String path = String.format("HtmlEmails/%s.html", fileName);

        // Obtén el recurso desde el classpath
        ClassLoader classLoader = getClass().getClassLoader();
        var resource = classLoader.getResourceAsStream(path);

        if (resource == null) {
            throw new IOException("File not found: " + path);
        }

        // Lee el archivo como un String
        try (var reader = new java.io.BufferedReader(new java.io.InputStreamReader(resource, StandardCharsets.UTF_8))) {
            return reader.lines().collect(Collectors.joining(System.lineSeparator()));
        }
    }

}
