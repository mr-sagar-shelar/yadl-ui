import type { Meta, StoryObj } from "@storybook/react";
import Dataprep from "../Dataprep";

const meta: Meta<typeof Dataprep> = { title: "GCP/Dataprep", component: Dataprep };

export default meta;
type Story = StoryObj<typeof Dataprep>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
