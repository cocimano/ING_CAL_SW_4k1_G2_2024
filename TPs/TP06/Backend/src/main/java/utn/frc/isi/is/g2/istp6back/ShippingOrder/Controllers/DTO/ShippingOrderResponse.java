package utn.frc.isi.is.g2.istp6back.ShippingOrder.Controllers.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import lombok.experimental.FieldDefaults;
import utn.frc.isi.is.g2.istp6back.Address.Controllers.DTO.AddressRequest;
import utn.frc.isi.is.g2.istp6back.Address.Controllers.DTO.AddressResponse;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Enums.LoadTypes;

import java.time.LocalDate;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ShippingOrderResponse {

    long id;

    LoadTypes loadType;

    AddressResponse pickUpAddress;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Schema(example = "2024-11-01")
    LocalDate pickUpDate;

    AddressResponse deliveryAddress;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Schema(example = "2024-11-01")
    LocalDate deliveryDate;

    // TODO: pictures

}
