package utn.frc.isi.is.g2.istp6back.FirebaseStorage.Controllers.Mappers;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Component;
import utn.frc.isi.is.g2.istp6back.FirebaseStorage.Controllers.DTO.ShippingOrderImageResponse;
import utn.frc.isi.is.g2.istp6back.FirebaseStorage.Entities.ShippingOrderImage;

import java.util.function.Function;

@Component
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ShippingOrderImageToShippingOrderImageResponse
        implements Function<ShippingOrderImage, ShippingOrderImageResponse> {

    @Override
    public ShippingOrderImageResponse apply(ShippingOrderImage shippingOrderImage) {
        return ShippingOrderImageResponse.builder()
                .id(shippingOrderImage.getId())
                .url(shippingOrderImage.getUrl())
                .build();
    }

}
