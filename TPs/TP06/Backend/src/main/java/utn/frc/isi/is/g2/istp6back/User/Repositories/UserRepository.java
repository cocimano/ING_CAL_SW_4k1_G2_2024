package utn.frc.isi.is.g2.istp6back.User.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import utn.frc.isi.is.g2.istp6back.User.Entities.User;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u JOIN u.coverageArea l WHERE l.id IN (:locationIds)")
    List<User> findUsersByCoverageAreaContainingLocations(@Param("locationIds") List<Long> locationIds);

}
