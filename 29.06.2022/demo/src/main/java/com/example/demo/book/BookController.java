package com.example.demo.book;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Apı layer of program
 * @version
 *      1.1 04 JULY 2022 @author: 
 *      Oğuz Kuyucu
 */
@CrossOrigin(origins = "http://localhost:4200" )
@RestController
@RequestMapping("api/v1/Book") //url
public class BookController {
    
    @Autowired
    private BookService service;

    @GetMapping("/book/{id}")
    public Book get(@PathVariable int id){
        return service.get(id);
    }
 
    @PostMapping("/post")
    public Book post(@RequestBody Book book){
        return service.post(book);
    }

    @DeleteMapping("/delete/{id}")
    public Book delete(@PathVariable("id") int id){
        return service.delete(id);
    }

    @PutMapping("/put")
    public Book put(int id, @RequestBody Book book){
        return service.put(id, book);
    }
    
    @GetMapping("/books")
    public List<Book> getAll(){
        return service.getAll();
    }
}
