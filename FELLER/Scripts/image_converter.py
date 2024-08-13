import os
from PIL import Image

# Define the directory containing the images
directory = '../FellerArtwork/Slide/'
print("current dir:", directory)
# Loop over all files in the directory
for filename in os.listdir(directory):
    if filename.endswith(".JPG") or filename.endswith(".jpg"):
        img = Image.open(os.path.join(directory, filename))
        # Replace the .jpg or .jpeg extension with .png
        new_filename = os.path.splitext(filename)[0] + ".png"
        img.save(os.path.join(directory, new_filename))
        print(f'Converted {filename} to {new_filename}')

