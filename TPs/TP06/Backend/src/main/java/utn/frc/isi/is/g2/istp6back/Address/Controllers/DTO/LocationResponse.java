package utn.frc.isi.is.g2.istp6back.Address.Controllers.DTO;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Builder
@Data @NoArgsConstructor @AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class LocationResponse {

    @Schema(example = "1")
    long id;

    @Schema(example = "25 de Mayo")
    String name;

    ProvinceResponse province;

}
