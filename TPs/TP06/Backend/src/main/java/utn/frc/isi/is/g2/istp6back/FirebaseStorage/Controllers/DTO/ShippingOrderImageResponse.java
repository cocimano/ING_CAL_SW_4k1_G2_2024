package utn.frc.isi.is.g2.istp6back.FirebaseStorage.Controllers.DTO;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ShippingOrderImageResponse {

    @Schema(example = "1")
    long id;

    @Schema(example = "https://firebasestorage.googleapis.com/" +
            "v0/b/is-tp6-firebase-storage.appspot.com/o/76f8f1bf-ea03-4c75-a10b-627394010ea4?alt=media")
    String url;

}
