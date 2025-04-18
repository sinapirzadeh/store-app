'use client';
import { useForm } from 'react-hook-form';
import { CategoryDto } from '../../../../Dto/category.dto';
import {
  useCreateCategory,
  useGetCategories,
} from '../../../../hooks/admin/category/useCategoryHooks';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import ErrorMessage from '../../components/ErrorMessage';

export default function AddNewCategory() {
  const { mutate } = useCreateCategory();
  const { data: allCategories } = useGetCategories();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryDto>();

  const onSubmit = (data: CategoryDto) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        toast.success('دسته بندی اضافه شد.');
        router.push('/admin/categories');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-12 gap-6 items-center">
        <label className="grid col-span-6 max-md:col-span-12 gap-1">
          {errors.title && (
            <ErrorMessage message={errors.title.message as string} />
          )}
          <input
            {...register('title', { required: 'نام دسته بندی الزامی است' })}
            placeholder="نام دسته بندی"
            type="text"
            className="outline-none border-2 border-border bg-bg rounded-lg p-2 focus:border-blue-500"
          />
        </label>

        <label className="grid col-span-6 max-md:col-span-12 gap-1">
          {errors.slug && (
            <ErrorMessage message={errors.slug.message as string} />
          )}
          <input
            {...register('slug', {
              required: 'اسلاگ دسته بندی الزامی است',
              pattern: {
                value: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                message:
                  'اسلاگ باید به صورت kebab-case باشد (مثال: my-category)',
              },
            })}
            placeholder="اسلاگ دسته بندی"
            type="text"
            className="outline-none border-2 border-border bg-bg rounded-lg p-2 focus:border-blue-500"
          />
        </label>

      </div>

      <select
        {...register('parentCategoryId')}
        className="flex my-2 outline-none border-2 border-border bg-bg rounded-lg p-2 focus:border-blue-500"
      >
        <option value={''}>دسته‌بندی پدر</option>
        {allCategories?.map((CategoryItem) => (
          <option key={CategoryItem.id} value={CategoryItem.id}>
            {CategoryItem.title}
          </option>
        ))}
      </select>

      <button
        className="bg-green-500 rounded-lg active:scale-95 p-2 mt-4 text-white hover:bg-green-600"
        type="submit"
      >
        افزودن
      </button>
    </form>
  );
}
