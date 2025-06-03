from PIL import Image
import os

def resize_image(input_path, max_size=(800, 800)):
    # Open the image
    with Image.open(input_path) as img:
        # Calculate new dimensions while maintaining aspect ratio
        ratio = min(max_size[0]/img.size[0], max_size[1]/img.size[1])
        new_size = tuple(int(dim * ratio) for dim in img.size)
        
        # Resize the image
        resized_img = img.resize(new_size, Image.Resampling.LANCZOS)
        
        # Create output filename
        filename, ext = os.path.splitext(input_path)
        output_path = f"{filename}_resized{ext}"
        
        # Save the resized image with quality optimization
        resized_img.save(output_path, quality=85, optimize=True)
        print(f"Image resized and saved as: {output_path}")

if __name__ == "__main__":
    input_image = r"C:\Users\Ashish\Desktop\New folder\src\assets\profile.jpg"
    resize_image(input_image) 