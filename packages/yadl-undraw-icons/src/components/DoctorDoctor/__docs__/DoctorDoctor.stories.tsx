import type { Meta, StoryObj } from "@storybook/react";
import DoctorDoctor from "../DoctorDoctor";

const meta: Meta<typeof DoctorDoctor> = { title: "unDraw/DoctorDoctor", component: DoctorDoctor };

export default meta;
type Story = StoryObj<typeof DoctorDoctor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
