package utn.frc.isi.is.g2.istp6back;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.Resource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;
import utn.frc.isi.is.g2.istp6back.Logging.ConsoleColor;

@SpringBootApplication
public class IsTp6BackApplication {

    @Resource
    private Environment env;

    public static void main(String[] args) {
        SpringApplication.run(IsTp6BackApplication.class, args);
    }

    @PostConstruct
    public void init() {
        // Show the Swagger UI URL after the app starts
        String swaggerPath = "/swagger-ui/index.html";
        String newLines = "\n".repeat(3);

        System.out.printf("%s%sLocal url: http://localhost:%s%s\n%s%s",
                ConsoleColor.WHITE_BOLD_BRIGHT,
                newLines, env.getProperty("server.port"), swaggerPath, newLines,
                ConsoleColor.RESET);
    }

}
