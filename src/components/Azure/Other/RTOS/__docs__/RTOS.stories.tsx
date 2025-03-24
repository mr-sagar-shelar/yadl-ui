import type { Meta, StoryObj } from "@storybook/react";
import RTOS from "../RTOS";

const meta: Meta<typeof RTOS> = { title: "Azure/Other/RTOS", component: RTOS };

export default meta;
type Story = StoryObj<typeof RTOS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
