// stackbit.config.ts
import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['posts'],
            models: [
                {
                    name: "Post",
                    type: "page",
                    urlPath: "/posts/{slug}",
                    filePath: "posts/{slug}.mdx",
                    fields: [
                        { name: "title", type: "string", required: true, default: 'Post Title' }, 
                        { name: "description", type: "string", default: 'Post description goes here' },
                        { name: "date", type: "date", required: true },
                        // Add image field for dynamic image selection
                        { 
                            name: "image", 
                            type: "image", 
                            label: "Post Image", 
                            required: false, 
                            default: "/images/random-image.jpeg"
                        },
                    ]
                  }
            ],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        })
    ]
});