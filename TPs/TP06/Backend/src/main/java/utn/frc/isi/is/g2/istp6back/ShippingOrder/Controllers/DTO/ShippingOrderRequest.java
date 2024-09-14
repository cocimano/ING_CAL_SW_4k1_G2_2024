package utn.frc.isi.is.g2.istp6back.ShippingOrder.Controllers.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import utn.frc.isi.is.g2.istp6back.Address.Controllers.DTO.AddressRequest;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Enums.LoadTypes;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ShippingOrderRequest {

    LoadTypes loadType;

    AddressRequest pickUpAddress;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Schema(example = "2024-11-01")
    LocalDate pickUpDate;

    AddressRequest deliveryAddress;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Schema(example = "2024-11-01")
    LocalDate deliveryDate;

}
