import os
import sys
from pypdf import PdfReader

document = PdfReader(sys.argv[1])
output_dir = sys.argv[2]
os.makedirs(output_dir, exist_ok=True)
seen = set()

print(f'Pages: {len(document.pages)}')
for page_number, page in enumerate(document.pages, start=1):
    for image in page.images:
        if image.name in seen:
            continue
        seen.add(image.name)
        filename = f'image_{len(seen):02d}.{image.name.rsplit(".", 1)[-1]}'
        with open(os.path.join(output_dir, filename), 'wb') as image_file:
            image_file.write(image.data)
        print(f'Page {page_number}: {filename}')
