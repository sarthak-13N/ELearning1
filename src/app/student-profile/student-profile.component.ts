import { NgIf, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  student: any;
  recommendedCourses!: any[];

  ngOnInit(): void {
    // Mock student data
    this.student = {
      image: 'data:image/jpeg;base64,/9j/',
      username: 'Sumedh Kedari',
      purchasedCourses: [
        { 
          title: 'JavaScript',
          image: 'data:image/png;base64,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',
       completion: 25
        },
        { 
          title: 'Web Development with Angular',
          image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQWFRgVEhUYEhgYGBIREhgSGBgSGBgYGBUZGRgYGRgcIS4lHB4rHxgYJjgmKy80NTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHDQhISE0NDQxNDQ0NDQ0MTQ0NTY0NDQ0NTE0NDQ0NDQ0NDY0MTU0NDQxND01NDE2MT80ND80NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAD0QAAEDAgQDBgUCBQMDBQAAAAEAAhEDIQQSMVFBYXEFEyKBkaEGFDKx8MHRQmJygpIjUuEH0vFTk6Kywv/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAAqEQEBAAIBBAECBgIDAAAAAAAAAQIRAwQSITFRBUEiYXGBodEywRMUFf/aAAwDAQACEQMRAD8A4toU4SaE8LbEJoVzVW0KwKVYRSSSWWkXhAY1mi0HoLGBbxZrLexVOai3hUPC6bWBXBRVjwqyikES2rAQyg4pUW1MQSh3GU6isgzDNEJ8RQ4hWYVlk+KfAUADKd1qUWQFjioVpYSvNkSiigMaVoFZuN1UpiECdME6jRinCZOiEnYUySC/vFr9k4o/Q7Th+ywgUTQqQQRwug6xJUYXEh4lWucpo2kSh3uTkqp6sS0ySdJVFzQpJmqRQO1SCi1SClahJJJLKmKExSLKExa1igFyoqK9xVFRbIocFW4Kx5TtpiMztOSqhXFQKLcae3mM1+gJsqq1KLgyPWPPj+cpu0UpgnUVkaeE+lQxTFPB6KON0UqfdnhklaWGw8XWdQPiWzT0UKTys7GLQcs/HIYhAkUgouUaSBSTBOgSQTJwgdWsKqU2lBr9mVYMea2AufwLvGPRdEwCEZ0i5qqcESQqKgSFitJPCSqLgpFQY+QCpkoGBTd4N0gg69GLhNbaFOrjdTZUBWXnSbVhO0az0Di3aK1mIzBCYp6SaA7yqXlO5yqc5dNEOGyQOYCjjD9p9fw+qrc9XOOe4s7U76fb86xTGj48uQxmInx6ZomZjTiq8KZaQdvvYmeUylkf/uI43c4DpOidzgwZdSZkbSIP502uQKoqw5TxLesOHqI+ybuzwId0N/QwVAfgzZQx5srME0xe28hQxZmzWZv8ifYhZT7gcOPEFst0WdQgkQIO2oPSbgrRZoiZGWfjloErPxyUx9hFEp1FSNpBIlIK+nhSfqOWdBEn0QDkpwUScMD9LgdYkETH39EOWxYoEpBME7UF9Iroeza+YQTMarm2rZ7IqgGDx0So2FVVCtUKikKpSTwktMs5+JLGgxNy0/ce32TN7R5FNUbLXDlmHVt/tKAaukmxrMxwVjMW11lljRTw/wBSXGA2vS4hBvetHNAkrLxDw51lIs8pMrQZ9UZLX3bqgg0ATMQC4kaxMADYzxVj3OY6DMgtaQXB/wBUwQR0Nlaelr6YPIoSvSIRjHh4kWKWXgVn01LtkkKE7a8FfiWZSqaRvO0u8xp7x6rSVKtVdJAc6B4dTeLT5wqUxSUCKZWUqLnGGtLjs0Fx9lsYT4aquu8tpjn4j6C3uueWeM9124um5eW6wxtCYF3hI5j7FXgk/SRN501h1/pP8vouiwfYlKmNC88S64/xFk+MwNNxIcxp4C0EW4EXC43qMd6ke/8A8jlmPdlZL8OOeQanh3GmkzbgOXutFvLyRlTsFoM03EHZ1wOh1Huqn4N7NWzzb4gumPJjl6rxc3Sc2HuePmBSUDjka8oHGLdeaBCopymUjQjBtl0n+EZvcCfKZ8lIjOSCYiSBA3AgC2/E8FDCvyuvobH1B9JA8pVpa5pJaJzeHxakmDaDMyPzVBW6kWiQSDOWCMpgg3idLFWVxLQ7Qzl31BOvp5kpMlwy5Q0A7OsYNpJO5slioADRyc6N4ifOfYboBpThyZOCoLGPRGHxOVwO11QwK1rAVUrq2OkSEz1j9lYktORxkatnhyWw9Se034VpKcJLSsgGDPNA1GZXObsbdOHtCOQ2Ob9LtxlPVv8AwQtxkzdEsOfEotNk2HPjWtjWezMIQD8A8aQfZaDCjW6LnbpZXMteQYNiJGk2OoI4hS7wCNLHNDQQJ3JNyfzrb2gBnPQIR71rajMO9o0Mcnfvp9kSyqHWNj+XCxCSraVRzdD5G49E0XyNxtORtzKBAbBGa5jUGIBkiddY4cEeasmHaQ33AJUMXhGBgeyTfxGQQJAsRwv+aLMq2AmUpe1pMZi1s6i5ieYXWYX4dosu8moba+Eeg/Ulckx1ju2HDlcA/cei9GDpvvBXn6jK461fb7H0jh4uS5XObs1raNKmGiGgNGzQAPQKSSS8T9HJJNROlTc5zWtGZzi1rRu5xgD1K3fjX4dGGFF7Ltc0Uqh3qNE5v7hP+KN/6f8AZneVjWcPDSEDm9wIHo2T5tXc/EHZoxGHfRNi4Swng4XafUCeUrvx8e8bXxOu63t6jHGXxj7/AH/p4eknc0tJa4ZXNJa4HUOaYIPMEEJlzez2or4Vj/qaDz0PqFh9r9kBrczCTcDKY9iujWZ23VDWsExLibXJgf8AK68eWXdJt4+s4eO8dy1Nz7uQfTc36gR1EKLWE6AnoJW2x8jiPdW0WlvOeO69Ur4GmHZvM+oH7n2VlOu8cZ/qk++vuiO0cHBzsHhP1Afwn9kLTFlWRPfOItA6T+pshqtxPEeF3/5P3HkFfTKhLc19D4T+h8jB8kpFDKZKJZSUmVG/SRB080nU3atMoJGhsq7tN9Eg54U21wbOCovwzxnb1XQDQLmC2IcOBBXR4Z8tCMrUkklnbWmK03SrsljhtDx5WPsfZQabq5hvfTQ9DYroyzC+BCsw/wBQVFdsOIPAkeisw7rhaK2mFHsFln01oM0XPJYzO1MOCMw1H2WIQunxWiwsaWyI14qz0S/YKAnSVrS0c0tbiYpkiRqBEbxoR5fZQq1qjm5MpgagNgmNJMckq2J8NuNh04/t5FBlxiD6JEtTdYRMk3MXFtBPH/wvQcA+aVM7sYT1yiV540LuuwXzh2cg5vo4hefqp+GV9f6Llrlyx+Y0Evy10l0HwX2X32JaSJbSiq/YuB8A/wAhP9hXjxx7rqP0HPyzi48s76kd92Bgm4TCgPhpDXVax/mIzOvyiOjQsb4J+I3V6tenUPiLjWog8GGAWD+nw/5HZE/H2Le2gKVNrnGqYdkaXQxsF2g4nKOhK86wDq9Cuysym+WODoyP8QiHN04tJHmvVctZST1H53i6ec3DnyZX8WV8Nr/qJ2V3WIFZo8Na52FRoAPqIPXMuSXs3xF2eMZhCGXcWitRJscwEtF9JByn+orxj25GxHULnyY6y38vV0PN38fbfePj+jrF7bgvYHGwBJ6OcAT/APFbS5/tcg1Ym4DWwfM6+acX+S9fdcNnzYmKIA30AuD1/OaoxT8oAGsj0IP7K0GBLiIF7kbIDNmM7mf2/Ou69fqPgT2JFQwLTNj0QWJwuQjL9LtOR4haDWWnQc1F4ztcGw4jxN6gaJErMylSZS3CgMXu1WMqsPGOtlpE69GfE2/A9R+D3VDapbYiEZTJFtQdOvD9vNSAY7UeqJtWx4cmq0AeShUw5YczLjYq+lVDxsUQJTlpynRdDgWwwdAsdzLjqFu0hYIJpJQks+GvLnwb+ZV4Q03KvYVvbNCdoM8Qd/uAPmLH9PVU4cHMFoYlks/pM+Rsf0QzGJtqSWNOm+yvZiFnU2OPFF0sLzKm0sh8TUzCNFjYmgdQtp+F5lD1KQCbJpglSY2THryHE+iJxNIahUGzebv/AKg/qR7c1dqZ7pPLQDYDRRaCTATKxo8LurW+RzH7tHohoRhqLSdSenhHvc+y6/sJoFPKODna8wD+q5LCOytm05iLhp4NtfrwXSfDtbMagiI7t4H9TJI9QuHP5xfT+l5dvUyfMsbS9W+CezO5wzS4Q6p/qunUA/S3ybFt5Xnvw32b3+IYwiWj/Uqf0tiQephv9y9I+Lu0e5wzy0w5/wDpU4sZcCJHMCT5LhwzUuV+z3/VOS55Y9Pj7t8/6VO+MsECR3psSLU6hFtiG3HNQd8b4AWNV3/tVf8AtXlcIep9R/OCTmtXP6Tw4ze7/D2rsj4hw2Jc5tB5cWgOcC17LExIzATfbcLzj487J7jElzRDK01WxoHT/qD1Id/cs34b7T+XxDKpMNBy1P6HWd6Wd/aF6b8ZdlfMYZ2UZns/1qUXJIBlo6iR1jZdN9+N+Y8Ux/6nUTV/Dfl4+uV7QdNZ5/mj0AH6LqQVxuKreJxGrnOI8yVnhnmu31LLWMn5p4mrm8I0EF37KWFbJHugmFaGGeGjMeFyvR93x08dVPhYCBm1PAD8+ynhxkESS6Y2HlxQzSC4ueMwP0wYA2/8IttyLaAC2wT3U+xsTRuHAWdwiYKDfTYTDmOH8zQYWo4S2Nlj45t1b4TW17sM5gzMObYOvA6KTXkmHjK7jpsDY+YQGHxBZaYvO42II2sFoODagzsMubfKJ12uNCrLtinL5sdRIIQL3w6W2vdEtfnGb+IfUPuhWtl5HmlI1cBSzkOOgWtCFwEBoA4ItCEkkkmjbmpuepVtMqgm56lWsKpRTNtwR6oNlUgxHJFNKprMOYloN7291YyIpVDtCPw5J0WfRa7/AGx1P7Ipj3DWB0Sgis0rPxDbXt1VjcU1xgOmxNtPy6HdiGODneIhsdb2UkUN3EnUHflvooOpSfp8ttgjZIIyUybBxJtAPXqrnZtTDW8/zp7q6XbPbhCeCupYI6GIOv7p34hg1eXcmqL8U/8AhYWjd1vvZNJu1cMMGD6ra6j9Vdgu0W0iSPEXQHcZjS40QAfxdBPMyPLLKY1428m29Sf0UuMs1W+PPLDKZ43VjsuzO2g4nuarqbiPE0OdTcR/aRmCNrYqo6z3vfFxnc50dMxMLgGYwf7J4iT+wWnhfiFzTD25m9fGPM6+fqvLnwWecb+z7vS/VcMrP+bHV+Y6ZD1NT+cE+FxbKgljg7caOHUcE1XU/nBeaSy6r63JnjlhMsbuIok9rV2tn5ms1oH/AK1RoAGg+qAFz+O7cYy1Pxu0n+EefHy9VgYvFveZe7NsBZo6Bd8OPK/k+T1HWcWPifiv8NzGdugyKfiN5e77ganqVzbnyeXBJ7oHVVtK744zH0+Tzc+XLlu0Q0JzUmANB7lUl82VghozO4/SBYn9gtOWxuFsc0wBc+QmPZS+bmwJKA+ZJ/hER/NpNzr5SrqGXUG2hnUH8+yQ3tqUn2usvEPklTxVd0ZWAncgGEHTYZgjleytib0jUVmArFrweBOU+aNOCMaeioYxkgkgAGTvbhCasS2LMU/JVkaHUdVPuwH5hxFkDiqxe+QNbNC2KXZz8ouNFazoTgXLQQOGw7m6oxVEklGUkHLudc9SpNeoPw7pMHifum7h+/so0MpvTvJlsE8Z9kKyi/l5q1uFeTLnR0WoyIc52U5deF0wBOrr3sDKrcGM+pxedp/QKt2MOjGho6XVSLcFhchzOdwIM2H5ZWGsymSWguJudpniSs15c43lxRmGovjxRHCbkdOHqp+jX6nf2o91gAJtY9OPkFTVeQ0DUm5zeLgJ15ge6NljdBmJ1sHH2H3Vb6GbUBg5Xd66BNU3AHeu/wB0chYegUcxRr302WADj6+pUG92TLi3o0QPPdXRsIXngmndHPxTPpbAG5Fh0HFJr6YvIceJIk+Q4Jo2CzJs6vdWY43GUbNAk9T+yta9jrMZmPMQB1KmjZ8HWDIdJzEA+G0DhdG47tIvYPF9RLTw0G3l7oT5O3iItt4YG3RVfLZyIswTfc8v3TtnvTU5cpLjMrJfc+wIOE/ZO56Lq4JrRJJ2Atc7aJ6fZ0iSYO0TCzcanfGcTKUI92EGcMBni7hARYwDNvcq9qd0ZLG/zD3/AGVz6TSRmfAysAs48IPDeVdhzTBdmHHw2Jsrq76RbAF+BAuL800bWtZSy5s1suTRszljXLM8vPRRw+QTDuA/gjiFex9OB4hoBqVU+oxr5aA5sXA3Vk0bXtrs3PoVRiSwmW68bKTsWwiMmvRCFyqDsNif4XeR/RNjcCHnM2x48/8AlAEo7C4qfC7XgVBXh8K1pBi4WtRehnhPTcnamxwKZxVbHKUrOmtkkmSVRn5AolwCFOIdJ6lL5nktyRE34qPpaShqlV7tZHRXjE8k/wAyNk0Ash2Kup5B9QJRIxDdlLvGpo2rZiRpTZJ6KNdtWJMNGw1RlMtaJAUK1YOsTbYKeRmsxDxoR6JqlZ7tXelkWWsUcrOSaq7nwByJu7WhlYmLWck1TuAd2l3aNLGcksjOSmqbCQArGVI0JHREBjOSl3bOSuqbUMrT9RkbFGHEGLAKruWcku4HA+6uqbhU64Lsz9eA4BEnFshCnDD8Kb5XmU8p4DucSSbgnZLM7c+pRHyx3S+Wdus+V8Bw1SDVd8u5MaLtk/YVQnTODpiFd3TtlZRBRKtyHZLIdkFKYFXZDsmLDspoGYavmEHVXg3WYwEGQtCm6QtRmi2FWAoZhhXArNixOUkydRXKvr3PU/dL5hU1PqPU/dRTbWhHzCf5hDJJs0JGICk2sCUIna6E3TTbYLJFgWe3GlP86omhpYNlDKEKcYk3FKLoVA2UHOaqfm2pxXamzSfeNTtc0ql72KsvA0TZoeKIUXUgg/myouxBPFXaaorK1SDRuqKbAeKs7obqbXSzLzTid1SafNLu+ad1NReHndSFQofuzumyHdXuqdsFiuVa3EbrPyO3T5Xbq99NDX1GyCrHYhsLNcTxVFR8JMjta/zDeSfvmcliiqFIVAt90Tta/eMT528lkCoFLvAndE01czeSTarQsvOEsw3TcNNR2JG6nSxAKx5U6dWCng038ySFpVxASWFZTsLc9T91H5ROkstG+UTHBpJIG+UKY4QpJIpvlCm+VKSSIj8uU3cFJJA3clN3JSSRTd0U+QpkkCylNBSSUDglPndukkgQqO3Tis7dJJA/fuTjEuSSQSGKKcYspJIIPxBKrc6UkkEUkkkCSSSQKU+ZJJULMpNckkg18O/wj84pJJIj/9k=',
          completion: 50 
        }
      ]
    };

    this.recommendedCourses = [
      { 
        title: 'React for Beginners',
        image: 'data:image/png;base64,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' },
 
      { 
        title: 'Vue.js Essentials',
        image:'data:image/jpeg;base64,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' }
  ];
  }

  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.student.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  purchaseCourse(course: any): void {
    this.student.purchasedCourses.push({
      title: course.title,
      image: course.image,
      completion: 0
    });
    this.recommendedCourses = this.recommendedCourses.filter(c => c !== course);
  }
}