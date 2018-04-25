package fi.haaga.helia.studentCrudReact.studentCrudReact.domain;

import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student, Long> {

}
