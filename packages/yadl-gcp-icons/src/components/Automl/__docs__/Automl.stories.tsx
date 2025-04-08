import type { Meta, StoryObj } from "@storybook/react";
import Automl from "../Automl";

const meta: Meta<typeof Automl> = { title: "GCP/Automl", component: Automl };

export default meta;
type Story = StoryObj<typeof Automl>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
