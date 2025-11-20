import Image, { StaticImageData } from 'next/image'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import { ICONS } from '@/assets'
export type TProject={
    title:string,
    description:string,
    tags:string[],
    imageUrl: string|StaticImageData
}
const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <div className='space-y-6 max-w-[373px] font-Figtree '>
        <div className='w-full space-y-[5px] md:space-y-[9px]'>
            <h3 className='text-white text-3xl leading-[132%]'>{project.title}</h3>
            <p className='text-neutral-40 text-xs '>{project.description}</p>
        </div>
        <div className='w-full flex gap-1.5'>
            {project.tags.map((tag)=>(
                <p key={tag} className='py-2 md:py-3 rounded-full px-3 md:px-4 bg-primary-15 text-primary-10 text-[10px] md:text-xs'>{tag}</p>
            ))}
        </div>
        <div className='relative w-full group' >
            <div className='absolute flex lg:hidden items-end justify-end inset-0 h-[446px] w-full rounded-[20px] bg-gradient-10 p-4'>
                <SecondaryButton
              label="Live View"
              classnames="py-3 px-[27px] rounded-2xl bg-transparent"
              labelClassname='text-white'
              icon={ICONS.whiteTopRightArrow}
              iconClassname="py-2.5 px-2.5 rounded-2xl bg-transparent"
            />
            </div>
            <div className='absolute hidden group-hover:flex items-center justify-center inset-0 h-[446px] w-full rounded-[20px] bg-neutral-35 backdrop-blur-2xl'>
            
                <SecondaryButton
              label="Live View"
              classnames="py-3 px-[27px] rounded-2xl"
              icon={ICONS.topRightArrow}
              iconClassname="py-2.5 px-2.5 rounded-2xl"
            />
            </div>
            <Image src={project.imageUrl} alt={project.title } className='h-[446px] w-[373px] rounded-[20px]' />
        </div>
    </div>
  )
}

export default ProjectCard