package utn.frc.isi.is.g2.istp6back.FirebaseStorage.Services;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import utn.frc.isi.is.g2.istp6back.FirebaseStorage.Entities.ShippingOrderImage;
import utn.frc.isi.is.g2.istp6back.FirebaseStorage.Repositories.ShippingOrderImageRepository;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Entities.ShippingOrder;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Repositories.ShippingOrderRepository;

import java.io.IOException;
import java.util.Date;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ShippingOrderImageService {

    FirebaseStorageService firebaseStorageService;

    ShippingOrderImageRepository shippingOrderImageRepository;
    ShippingOrderRepository shippingOrderRepository;

    @Transactional
    public ShippingOrderImage save(long idShippingOrder, MultipartFile file) throws IOException {
        if (!(Objects.equals(file.getContentType(), "image/jpeg") ||
                Objects.equals(file.getContentType(), "image/png"))) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Invalid file type. Expected a .jpg or .png image");
        }

        ShippingOrder shippingOrder = shippingOrderRepository.findById(idShippingOrder)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "ShippingOrder not found"));

        String imageName = firebaseStorageService.uploadFile(file);

        ShippingOrderImage shippingOrderImage = ShippingOrderImage.builder()
                .name(imageName)
                .url(firebaseStorageService.getUrl(imageName))
                .shippingOrder(shippingOrder)
                .build();

        return shippingOrderImageRepository.save(shippingOrderImage);
    }

    @Transactional
    public void delete(long idShippingOrderImage) {
        ShippingOrderImage shippingOrderimage = shippingOrderImageRepository.findById(idShippingOrderImage)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "ShippingOrderImage not found"));

        firebaseStorageService.deleteFile(shippingOrderimage.getName());

        shippingOrderImageRepository.delete(shippingOrderimage);
    }

}
