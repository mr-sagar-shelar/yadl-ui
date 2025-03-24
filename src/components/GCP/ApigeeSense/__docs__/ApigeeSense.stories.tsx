import type { Meta, StoryObj } from "@storybook/react";
import ApigeeSense from "../ApigeeSense";

const meta: Meta<typeof ApigeeSense> = { title: "GCP/ApigeeSense", component: ApigeeSense };

export default meta;
type Story = StoryObj<typeof ApigeeSense>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
