import type { Meta, StoryObj } from "@storybook/react";
import Datastore from "../Datastore";

const meta: Meta<typeof Datastore> = { title: "GCP/Datastore", component: Datastore };

export default meta;
type Story = StoryObj<typeof Datastore>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
