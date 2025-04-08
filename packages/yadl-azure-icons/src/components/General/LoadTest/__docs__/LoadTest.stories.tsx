import type { Meta, StoryObj } from "@storybook/react";
import LoadTest from "../LoadTest";

const meta: Meta<typeof LoadTest> = { title: "Azure/General/LoadTest", component: LoadTest };

export default meta;
type Story = StoryObj<typeof LoadTest>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
