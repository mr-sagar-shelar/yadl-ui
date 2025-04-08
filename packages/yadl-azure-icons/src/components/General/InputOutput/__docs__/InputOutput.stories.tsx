import type { Meta, StoryObj } from "@storybook/react";
import InputOutput from "../InputOutput";

const meta: Meta<typeof InputOutput> = { title: "Azure/General/InputOutput", component: InputOutput };

export default meta;
type Story = StoryObj<typeof InputOutput>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
