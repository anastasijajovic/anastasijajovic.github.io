from pathlib import Path
import sys
from PIL import Image, ImageDraw

source = Path(sys.argv[1])
destination = Path(sys.argv[2])
files = sorted(source.glob('*.png'))
thumb_width, thumb_height, cols = 180, 130, 5
rows = (len(files) + cols - 1) // cols
sheet = Image.new('RGB', (cols * thumb_width, rows * (thumb_height + 28)), '#0b1f45')
draw = ImageDraw.Draw(sheet)

for index, image_path in enumerate(files):
    image = Image.open(image_path).convert('RGB')
    image.thumbnail((thumb_width - 12, thumb_height - 12))
    x = (index % cols) * thumb_width + (thumb_width - image.width) // 2
    y = (index // cols) * (thumb_height + 28) + (thumb_height - image.height) // 2
    sheet.paste(image, (x, y))
    draw.text(((index % cols) * thumb_width + 8, (index // cols) * (thumb_height + 28) + thumb_height + 5), image_path.name, fill='white')

sheet.save(destination)
