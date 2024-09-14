package utn.frc.isi.is.g2.istp6back.FirebaseStorage.Controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import utn.frc.isi.is.g2.istp6back.FirebaseStorage.Controllers.DTO.ShippingOrderImageResponse;
import utn.frc.isi.is.g2.istp6back.FirebaseStorage.Controllers.Mappers.ShippingOrderImageToShippingOrderImageResponse;
import utn.frc.isi.is.g2.istp6back.FirebaseStorage.Services.ShippingOrderImageService;

import java.io.IOException;

@Tag(name = "Shipping Order")
@RestController
@RequestMapping("/shipping-order/images")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ShippingOrderImageController {

    ShippingOrderImageService shippingOrderImageService;

    ShippingOrderImageToShippingOrderImageResponse shippingOrderImageToShippingOrderImageResponse;

    @PostMapping(value = "/{id}", consumes = { "multipart/form-data" })
    public ResponseEntity<ShippingOrderImageResponse> uploadImageResidence (
            @PathVariable long id,
            @RequestParam(value = "file") MultipartFile file)
            throws IOException {

        ShippingOrderImageResponse imageResponse = shippingOrderImageToShippingOrderImageResponse
                .apply(this.shippingOrderImageService.save(id, file));

        return ResponseEntity.ok(imageResponse);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteImageResidence(@PathVariable Long id){
        shippingOrderImageService.delete(id);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
