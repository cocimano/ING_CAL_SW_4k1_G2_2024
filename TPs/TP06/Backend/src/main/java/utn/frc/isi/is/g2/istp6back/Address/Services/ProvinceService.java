package utn.frc.isi.is.g2.istp6back.Address.Services;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import utn.frc.isi.is.g2.istp6back.Address.Entities.Province;
import utn.frc.isi.is.g2.istp6back.Address.Repositories.ProvinceRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ProvinceService {

    ProvinceRepository provinceRepository;

    public List<Province> findAll() {
        return provinceRepository.findAll();
    }

}
