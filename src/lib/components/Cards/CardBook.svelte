<script lang="ts">
  import Button from "../Buttons/Button.svelte";
  import { faBook } from "@fortawesome/free-solid-svg-icons";

  export let cover: string;
  export let title: string;
  export let author: string;
  export let status: string = "";
  export let description: string = "";
  export let link: string = "#";
</script>

<div class="cardBook">
  <div class="card-content">
    <div class="book-cover">
      <img src={cover} alt={title} />
    </div>

    <div class="cardBook-text">
      <div>
        <h1 class="book-title">{title}</h1>
        <p class="book-author">{author}</p>
        <div class="book-actions flex items-center justify-between">
          <span class="book-status">{status}</span>
          <span class="flex lg:flex-row flex-col gap-2 ">
            <Button
              text="Đọc sách"
              icon={faBook}
              href={link}
              iconPosition="left"
            />
            <button class="favorite-btn"> ♥ </button>
          </span>
        </div>
        <p class="book-description">
          {description}
        </p>
      </div>

      <a href={link} class="details-link">Chi tiết</a>
    </div>
  </div>
</div>
