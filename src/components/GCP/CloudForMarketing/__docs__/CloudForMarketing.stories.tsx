import type { Meta, StoryObj } from "@storybook/react";
import CloudForMarketing from "../CloudForMarketing";

const meta: Meta<typeof CloudForMarketing> = { title: "GCP/CloudForMarketing", component: CloudForMarketing };

export default meta;
type Story = StoryObj<typeof CloudForMarketing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
