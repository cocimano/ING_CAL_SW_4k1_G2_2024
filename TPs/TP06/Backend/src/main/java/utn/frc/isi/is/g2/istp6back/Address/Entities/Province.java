package utn.frc.isi.is.g2.istp6back.Address.Entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Table(name = "Provinces")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Province {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "province_generator")
    @SequenceGenerator(name = "province_generator", sequenceName = "province_seq", allocationSize = 1)
    long id;

    @Column(nullable = false, unique = true)
    String name;

}
