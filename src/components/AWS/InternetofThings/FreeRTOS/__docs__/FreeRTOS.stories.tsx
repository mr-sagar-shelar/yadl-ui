import type { Meta, StoryObj } from "@storybook/react";
import FreeRTOS from "../FreeRTOS";

const meta: Meta<typeof FreeRTOS> = { title: "AWS/InternetofThings/FreeRTOS", component: FreeRTOS };

export default meta;
type Story = StoryObj<typeof FreeRTOS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
