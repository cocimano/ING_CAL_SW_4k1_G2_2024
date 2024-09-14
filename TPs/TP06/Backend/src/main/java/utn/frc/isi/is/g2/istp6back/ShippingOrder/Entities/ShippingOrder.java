package utn.frc.isi.is.g2.istp6back.ShippingOrder.Entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import utn.frc.isi.is.g2.istp6back.Address.Entities.Address;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Enums.LoadTypes;

import java.time.LocalDate;

@Entity
@Table(name = "ShippingOrders")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ShippingOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "location_generator")
    @SequenceGenerator(name = "location_generator", sequenceName = "location_seq", allocationSize = 1)
    long id;

    @Enumerated(EnumType.STRING)
    LoadTypes loadType;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.SET_NULL)
    Address pickUpAddress;

    LocalDate pickUpDate;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.SET_NULL)
    Address deliveryAddress;

    LocalDate deliveryDate;

    // TODO: pictures

}
