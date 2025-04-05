'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createCategory,
  getCategories,
  getOneCategory,
  deleteCategory,
} from '../../../services/admin/categoryServices';
import { CategoryDto } from '../../../Dto/category.dto';

export const useGetCategories = () => {
  const { data, isLoading, isError, error } = useQuery<CategoryDto[]>({
    queryKey: ['Categories'],
    queryFn: getCategories,
  });

  return { data, isLoading, isError, error };
};

export const useGetOneCategory = (id: string) => {
  const { data, isLoading, isError, error } = useQuery<CategoryDto>({
    queryKey: ['Category', id],
    queryFn: () => getOneCategory(id),
  });

  return { data, isLoading, isError, error };
};

export const useCreateCategory = () => {
  const { mutate, isError, isSuccess, reset } = useMutation({
    mutationFn: (category: CategoryDto) => createCategory(category),
  });

  return { mutate, isError, isSuccess, reset };
};

export const useDeleteCategory = () => {
  const { mutate, isError, isSuccess, reset } = useMutation({
    mutationFn: (id: string) => deleteCategory(id),
  });

  return { mutate, isError, isSuccess, reset };
};
