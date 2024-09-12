package utn.frc.isi.is.g2.istp6back.Address.Controllers.DTO;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AddressRequest {

    @Schema(example = "Cruz Roja")
    String street;

    @Schema(example = "1")
    int number;

    @Schema(example = "Casa de ladrillo visto")
    String reference;

    @Schema(example = "1")
    long locationId;

}
