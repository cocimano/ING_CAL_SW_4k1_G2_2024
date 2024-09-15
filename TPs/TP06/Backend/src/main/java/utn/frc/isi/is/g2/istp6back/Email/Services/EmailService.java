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
import utn.frc.isi.is.g2.istp6back.Address.Entities.Location;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Entities.ShippingOrder;
import utn.frc.isi.is.g2.istp6back.User.Entities.User;
import utn.frc.isi.is.g2.istp6back.User.Repositories.UserRepository;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class EmailService {

    JavaMailSender javaMailSender;

    UserRepository userRepository;

    @Async
    public void sendNewShippingOrderEmail(ShippingOrder shippingOrder)
            throws IOException, MessagingException {
        Location pickUpLocation = shippingOrder.getPickUpAddress().getLocation();
        Location deliveryLocation = shippingOrder.getDeliveryAddress().getLocation();

        // Get template
        String template = loadHtmlTemplate("NewShippingOrder");
        template = template.replace("{{TIPO_PEDIDO}}", shippingOrder.getLoadType().getId());
        template = template.replace("{{FECHA_RETIRO}}", shippingOrder.getPickUpDate().toString());
        template = template.replace("{{FECHA_ENTREGA}}", shippingOrder.getDeliveryDate().toString());
        template = template.replace("{{LOCADLIDAD_RETIRO}}", pickUpLocation.getName());
        template = template.replace("{{LOCADLIDAD_ENTREGA}}", deliveryLocation.getName());

        // Get users
        List<Long> locationIds = Arrays.asList(
                pickUpLocation.getId(),
                deliveryLocation.getId()
        );
        List<User> users = userRepository.findUsersByCoverageAreaContainingLocations(locationIds);
        // Send mails
        for (int i = 0; i < users.size(); i++) {
            User currentUser = users.get(i);

            String templateWithName = template.replace("{{NOMBRE_TRANSPORTISTA}}",
                    String.format("%s %s", currentUser.getFirstname(), currentUser.getLastname()));

            sendHtmlEmail(currentUser.getEmail(), "Nuevo Pedido de Envío", templateWithName);
        }
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
