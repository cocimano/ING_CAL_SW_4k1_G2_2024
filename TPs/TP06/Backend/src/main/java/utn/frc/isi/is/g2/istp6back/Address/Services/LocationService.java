package utn.frc.isi.is.g2.istp6back.Address.Services;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import utn.frc.isi.is.g2.istp6back.Address.Entities.Location;
import utn.frc.isi.is.g2.istp6back.Address.Entities.Province;
import utn.frc.isi.is.g2.istp6back.Address.Repositories.LocationRepository;
import utn.frc.isi.is.g2.istp6back.Address.Repositories.ProvinceRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class LocationService {

    LocationRepository locationRepository;
    ProvinceRepository provinceRepository;

    public List<Location> findByProvinceId (long provinceId) {
        Province hotelFound = provinceRepository.findById(provinceId)
                .orElseThrow(() -> new IllegalArgumentException("Province not found"));
        return locationRepository.findByProvince(hotelFound);
    }

}
