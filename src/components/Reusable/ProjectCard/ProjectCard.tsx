import Image, { StaticImageData } from 'next/image'
export type TProject={
    title:string,
    description:string,
    tags:string[],
    imageUrl: string|StaticImageData
}
const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <div className='space-y-6 font-Figtree '>
        <div className='w-full'></div>
        <div className='w-full space-y-[11px]'>
            <h3 className='text-white text-3xl leading-[132%]'>{project.title}</h3>
            <p className='text-neutral-40 text-xs '>{project.description}</p>
        </div>
        <div className='w-full flex gap-1.5'>
            {project.tags.map((tag)=>(
                <p key={tag} className='py-2 md:py-3 rounded-full px-3 md:px-4 bg-primary-15 text-primary-10 text-[10px] md:text-xs'>{tag}</p>
            ))}
        </div>
        <div className='relative w-full group'>
            <div className='absolute hidden group-hover:block inset-0 h-[446px] w-[373px] rounded-[20px] bg-neutral-35 backdrop-blur-md'></div>
            <Image src={project.imageUrl} alt={project.title } className='h-[446px] w-[373px] rounded-[20px]' />
        </div>
    </div>
  )
}

export default ProjectCard