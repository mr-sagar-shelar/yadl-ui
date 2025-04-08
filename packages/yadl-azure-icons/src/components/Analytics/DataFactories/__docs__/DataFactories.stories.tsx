import type { Meta, StoryObj } from "@storybook/react";
import DataFactories from "../DataFactories";

const meta: Meta<typeof DataFactories> = { title: "Azure/Analytics/DataFactories", component: DataFactories };

export default meta;
type Story = StoryObj<typeof DataFactories>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
