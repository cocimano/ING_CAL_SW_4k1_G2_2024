package utn.frc.isi.is.g2.istp6back.Address.Controllers.DTO;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Builder
@Data @NoArgsConstructor @AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProvinceResponse {

    @Schema(example = "1")
    long id;

    @Schema(example = "Buenos Aires")
    String name;

}
