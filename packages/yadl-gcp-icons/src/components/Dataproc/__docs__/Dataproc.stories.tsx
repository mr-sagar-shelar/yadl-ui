import type { Meta, StoryObj } from "@storybook/react";
import Dataproc from "../Dataproc";

const meta: Meta<typeof Dataproc> = { title: "GCP/Dataproc", component: Dataproc };

export default meta;
type Story = StoryObj<typeof Dataproc>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
