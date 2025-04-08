import type { Meta, StoryObj } from "@storybook/react";
import CloudEkm from "../CloudEkm";

const meta: Meta<typeof CloudEkm> = { title: "GCP/CloudEkm", component: CloudEkm };

export default meta;
type Story = StoryObj<typeof CloudEkm>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
