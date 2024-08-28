import os
from PIL import Image
import pyheif

# Define the directory containing the images
directory = '../FellerArtwork/Slide/'
print("current dir:", directory)

def convert_image_to_png(image_path, new_filename):
    img = Image.open(image_path)
    img.save(new_filename)
    print(f'Converted {os.path.basename(image_path)} to {new_filename}')

def convert_heic_to_png(image_path, new_filename):
    heif_file = pyheif.read(image_path)
    img = Image.frombytes(
        heif_file.mode, 
        heif_file.size, 
        heif_file.data,
        "raw",
        heif_file.mode,
        heif_file.stride,
    )
    img.save(new_filename)
    print(f'Converted {os.path.basename(image_path)} to {new_filename}')

# Loop over all files in the directory
for filename in os.listdir(directory):
    image_path = os.path.join(directory, filename)
    new_filename = os.path.splitext(filename)[0] + ".png"

    if filename.lower().endswith((".jpg", ".jpeg")):
        convert_image_to_png(image_path, new_filename)
    elif filename.lower().endswith(".heic"):
        convert_heic_to_png(image_path, new_filename)
