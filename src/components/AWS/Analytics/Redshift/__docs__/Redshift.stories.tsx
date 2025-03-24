import type { Meta, StoryObj } from "@storybook/react";
import Redshift from "../Redshift";

const meta: Meta<typeof Redshift> = { title: "AWS/Analytics/Redshift", component: Redshift };

export default meta;
type Story = StoryObj<typeof Redshift>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
