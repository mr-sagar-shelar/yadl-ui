import type { Meta, StoryObj } from "@storybook/react";
import Bigquery from "../Bigquery";

const meta: Meta<typeof Bigquery> = { title: "GCP/Bigquery", component: Bigquery };

export default meta;
type Story = StoryObj<typeof Bigquery>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
