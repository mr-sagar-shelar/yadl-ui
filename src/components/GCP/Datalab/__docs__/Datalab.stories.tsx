import type { Meta, StoryObj } from "@storybook/react";
import Datalab from "../Datalab";

const meta: Meta<typeof Datalab> = { title: "GCP/Datalab", component: Datalab };

export default meta;
type Story = StoryObj<typeof Datalab>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
