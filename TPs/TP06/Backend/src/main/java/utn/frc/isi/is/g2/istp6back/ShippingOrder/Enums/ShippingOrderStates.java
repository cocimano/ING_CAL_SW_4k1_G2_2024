package utn.frc.isi.is.g2.istp6back.ShippingOrder.Enums;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.experimental.FieldDefaults;

@Getter
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public enum ShippingOrderStates {

    PENDING("Pendiente"),
    TAKEN("Tomado"),
    DELIVERED("Entregado");

    String id;

}
