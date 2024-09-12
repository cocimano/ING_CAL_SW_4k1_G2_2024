package utn.frc.isi.is.g2.istp6back.Enums;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.experimental.FieldDefaults;

@Getter
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public enum LoadTypes {

    DOCUMENTACION("Documentación"),
    PAQUETE("Paquete"),
    GRANOS("Granos"),
    HACIENDA("Hacienda");

    String id;

}
