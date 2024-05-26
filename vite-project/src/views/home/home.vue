<template>
  <div>
    <div class="flex justify-end mt-4 mr-4"><Checkbox :checkbox-style="CheckboxStyle.Toggle" /></div>
    <div class="grid grid-cols-2 grid-rows-2 gap-4 mx-4 my-4">
      <Card>
        <Line :data="data1" :options="option1"></Line>
      </Card>
      <Card>
        <Line :data="data2" :options="option2"></Line>
      </Card>
      <Card>
        <Line :data="data3" :options="option3"></Line>
      </Card>
      <Card>
        <Line :data="data4" :options="option4"></Line>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/card.vue';
import Checkbox, { CheckboxStyle } from '@/components/checkbox.vue';
import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  FontSpec,
  Legend,
  LineElement,
  LinearScale,
  Point,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options: ChartOptions<'line'> = {
  plugins: {
    title: {
      display: false,
      font: { size: 18 } as FontSpec,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

const option1: typeof options = {
  ...options,
  plugins: {
    ...options.plugins,
    title: {
      ...options.plugins?.title,
      display: true,
      text: 'Chart1',
    },
  },
};
const data1: ChartData<'line', (number | Point | null)[], unknown> = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data 1',
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};
const option2: typeof options = {
  ...options,
  plugins: {
    ...options.plugins,
    title: {
      ...options.plugins?.title,
      display: true,
      text: 'Chart2',
    },
  },
};
const data2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data 2',
      borderColor: 'red',
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
      data: [45, 55, 70, 75, 60, 45, 50],
    },
  ],
};
const option3: typeof options = {
  ...options,
  plugins: {
    ...options.plugins,
    title: {
      ...options.plugins?.title,
      display: true,
      text: 'Chart3',
    },
  },
};
const data3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data 3',
      borderColor: 'green',
      backgroundColor: 'rgba(0, 255, 0, 0.1)',
      data: [55, 60, 65, 70, 75, 70, 65],
    },
  ],
};
const option4: typeof options = {
  ...options,
  plugins: {
    ...options.plugins,
    title: {
      ...options.plugins?.title,
      display: true,
      text: 'Chart4',
    },
  },
};
const data4 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data 4',
      borderColor: 'orange',
      backgroundColor: 'rgba(255, 165, 0, 0.1)',
      data: [75, 70, 65, 60, 55, 50, 45],
    },
  ],
};
</script>

<style scoped></style>
