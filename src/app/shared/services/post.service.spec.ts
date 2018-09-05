import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';


describe('PostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PostService]
    });
  });

  it('should be created', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));
});
