package fi.haaga.helia.studentCrudReact.studentCrudReact;

import fi.haaga.helia.studentCrudReact.studentCrudReact.domain.Student;
import fi.haaga.helia.studentCrudReact.studentCrudReact.domain.StudentRepository;
import fi.haaga.helia.studentCrudReact.studentCrudReact.domain.User;
import fi.haaga.helia.studentCrudReact.studentCrudReact.domain.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class StudentCrudReactApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentCrudReactApplication.class, args);
	}

	@Bean
	public CommandLineRunner studentDemo(StudentRepository repository, UserRepository urepository) {
		return (args) -> {
			User user1 = new User("user", "$2a$06$3jYRJrg0ghaaypjZ/.g4SethoeA51ph3UD4kZi9oPkeMTpjKU5uo6", "USER");
			User user2 = new User("admin", "$2a$10$0MMwY.IQqpsVc1jC8u7IJ.2rT8b0Cd3b3sfIBGV2zfgnPGtT4r0.C", "ADMIN");
			urepository.save(user1);
			urepository.save(user2);

			repository.save(new Student("John", "Johnson", "john@john.com"));
			repository.save(new Student("Mary", "Poppins", "pop@mary.com"));
			repository.save(new Student("Rob", "Robber", "rob@bery.com"));
			repository.save(new Student("Kate", "Robinson", "kate@robinson.com"));
		};
	}
}
